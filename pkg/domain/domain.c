
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct stock
{
    float low;
    float open;
    float close;
    float high;
    char date[11];
};

struct stock testData();

char monday(struct stock s[5]);
char wednesday();
void saveStock();
int getWeekday(char date[11]);

struct stock testData()
{
    struct stock s;
    s.low = 1.0;
    s.open = 2.0;
    s.close = 3.0;
    s.high = 4.0;
    strcpy(s.date, "2019-01-01");
    return s;
}

// Function that checks if prior thursday was better than friday and if so return true
char monday(struct stock s[5])
{
    return 0;
}

// Function that checks if tuesday was better than monday and if so return true
char wednesday()
{
    return 0;
}

int main()
{
    struct stock data = testData();

    // create an array of stocks this data should be fetched from a database
    struct stock stocks[5];

    // fill the array with data
    for (size_t i = 0; i < 5; i++)
    {
        stocks[i] = data;
    }

    monday(stocks);

    getWeekday(data.date);

    return 0;
}

// function that takes in a date of this format 2019-01-01 and returns the weekday
int getWeekday(char date[11])
{
    char *token = strtok(date, "-");

    // define an array of integers
    int dateArray[3];

    for (size_t i = 0; token != NULL; i++)
    {
        dateArray[i] = atoi(token);
        token = strtok(NULL, "-");

        fprintf(stdout, "%d\n", dateArray[i]);
    }

    // use the dateArray to calculate the weekday
    int d = dateArray[2];
    int m = dateArray[1];
    int y = dateArray[0];

    // Magic formula
    int weekday = (d += m < 3 ? y-- : y - 2, 23 * m / 9 + d + 4 + y / 4 - y / 100 + y / 400) % 7;

    // 1 == monday etc
    return weekday;
}

//"2023-01-01"; == sunday

void saveStock()
{
}