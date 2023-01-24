/* 
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
} */
