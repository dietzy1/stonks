# stonks service

A simple GRPC and REST service that allows the client to gain various information about stocks. 

The project is built with hexagonal architecure in mind, and is composed of completely seperated pieces layers of logic. All communication between layers is done through interfaces which implements the underlying classes. This allows all the primary and secondary ports and adapters to be interchangeable with other implementations aslong its able to implement the required interface.

# Architecture
![Alt text](docs/arch.png?raw=true "Architecture")


# Project todo list

Infrastructure
- [x] GRPC server
- [x] Express server
- [x] Scraper
- [x] Fetch client

Buissness logic
- [ ] Swing trading analysis
- [ ] Comparison between trading strategy and market