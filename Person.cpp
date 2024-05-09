#include "Person.h"

Person::Person(std::string first, std::string last, int age)
{
    firstName = first;
    lastName = lastName;
    age = age;
};

std::string Person::FullNameWithAge()
{
    return firstName + " " + lastName + "age: " + " " + std::to_string(age);
};

bool Person::operator<(int ageComp) const {
    return age < ageComp;
}