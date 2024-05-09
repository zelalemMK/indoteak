#include <iostream>

class Person
{
private:
    std::string firstName;
    std::string lastName;
    int age;

public:
    Person(std::string firstName, std::string lastName, int age);
    ~Person();
    std::string FullNameWithAge();
    bool operator<(int ageComp) const;
};