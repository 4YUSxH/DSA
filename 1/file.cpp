#include <bits/stdc++.h> //This HF contains all the HF required for compititive programming.
// Header files is a file that contains declarations of functions, classes, constants, and variables, which can be shared across multiple source (.cpp) files.
using namespace std;

int main(){
	// INTRO
	cout<<"Hey ";
	cout<<sqrt(16)<<" "<<endl;

	// VARIABLES
	int a = 2;
	int b = 2;
	cout<<a+b<<" ";
	// char, int, float, double, bool
	// long int , long long int : For storing large int values
	char c = 'a';
	float d = 1.5;
	double e = 3.7;
	bool f = true;
	bool g = false; // In C++ 0 is flase and baaki saari values true(1) hai.
	int h = 4.5; // If we try to store a float to an int it will trunacte values after .points and same for others.
	cout<<c<<" "<<d<<" "<<e<<" "<<f<<" "<<g<<" "<<h<<" "<<endl;

	// OPERATORS
	// +, -, *, /, %, ++, --
	int i = 0;
	cout<<i++<<" "<<++i<<" ";// It will give output based on complier like we have 1, 2 as an op but in diff complier it will show 0, 2.
	// i++(pahele i ko use karo fir increament karo), ++i(pahele i ko increament karo fir use karo).

	// CHARCTER & ASCII
	char j = 'A'; // Each char have its ascii value 
	cout<<(int) j<<endl; // Ascii value of A is 65

	// INPUT
	int k;
	float l;
	char m;
	cin>>k>>l>>m;// 10 20.5, 6(Providing int to char)
	cout<<k<<" "<<l<<" "<<m<<" "<<(int)m<<endl;
}