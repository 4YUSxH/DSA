#include <bits/stdc++.h>
using namespace std;

int main(){
	cout<<'c' + 1<<"\n";
	cout<<5/7.0<<"\n";
	// Complier will automatically convert the type of other datatype based on their predence.
	// Hamesha jab do diff datatypes ki caluculation hogi to output higher datatype ki precendence ke according aayega.
	// Precedence : char > int > long int > long long int > float > double  
	
	int a = 3/2;
	cout<<a<<"\n"; //Ideally 1.5 print hona chaiye par a pahele hi int/int hai upar se wo last mai int mai hi store ho raha hai islie 1 print hoga.

	int b = 3/2.0;
	cout<<b<<"\n"; // Yaha calcuate to int/double hua hai aur ans bhi double(1.5) aaya hai par int mai store karne se 1 print ho raha hai. 

	double c = 3/2.0;
	cout<<c<<"\n"; // Now it will works according to our expectation.
	
	int d = 3/2;
	cout<<d<<"\n"; // Yaha int/int karne par ans bhi int aa raha hai aur wo double mai jaa raha hai islie 1 print hoga, 1.5 to bana hi nahi kabhi, par d(1) ka type double hoga.
	
	// OPERATOR PRECEDENC
	cout<<7/2*3<<"\n";
	cout<<3*7/2<<"\n";
	// Imp : Saari calculations int mai ho rahi hai.

	// RANGES OF VARIABLE : Highest number it can store
	// Rough Ranges Imp for CP : 
		// -10^9 < int < 10^9
		// -10^12 < long int < 10^12
		// -10^18 < long long int < 10^18
		// Inke according dekhna hai ki program overflow mai to nahi jaa raha hai.

	int e = 100000;
	int f = 100000;
	int g = e*f; // 10^10 : Overflow for an int
	cout<<g<<"\n"; // Wrong o/p print hoga 10^10 nahi
	cout<<INT_MIN<<"\n"; // Minimum value an int can store
	cout<<INT_MAX<<"\n"; // Maximum value an int can store
	
	int maxx = INT_MAX;
	cout<<maxx+1<<"\n"; // Cycle back ho jayega overflow ke chakkar mai, Minimum(-2147483648) value par chala jayega
	// Diagram: Integer range and overflow behavior
	//
	//          INT_MIN                          0                          INT_MAX
	//     -2,147,483,648  --------------------|--------------------  +2,147,483,647
	//                      ^                                          ^
	//                      |                                          |
	//                      |                                          |
	//                      |<------------- int range --------------->|
	//
	//                          ↑ Overflow / Wrap-around ↓
	//
	//      (INT_MAX + 1) → -2,147,483,648 (INT_MIN)

	int h = 100000;
	int i = 100000;
	// long long int j = h * i; // O/P : 1410065408, It will produce wrong ans cuz both right side variables are int.
	long long int j = h * 1LL *i; // 1LL convert whole calculation in long long int.
	cout<<j<<"\n";

	// Ye saari calculatons double mai kyu nahi kar rahe hai
	// Decimal datatype(double & float) mai precision errors aati hai i.e. accuracy nahi hoti hai
	double k = 100000;
	double l = 100000;
	double m = k * l;
	cout<< fixed << setprecision(0) << m << "\n"; // fixed : Remove scientific notation(e), setprecision(0) : Remove all the zeros after decimal.
	// e is a scienrific way to write 10 to power something and it works in programming languages also.
	double n = 1e24;
	cout << fixed << n << "\n"; // Ideally 10^24 print hona chaiye par hai double hai to lambe data ko accurately store nahi kar paata hai.
	// Double aur Float ka use tabhi katna hai jab required ho to cuz inme precision error hote hai.

	// Solving first programming question :
	/*
	Constraints : 
	1 <= length <= 10^9
	1 <= breath <= 10^9

	Input format : 
	2 space sperated integar length and breath

	Ourput format : 
	Single number which is area of rectangle

	Sample input : 
	3 4

	Sample output : 
	12
	*/

	int length, breath;
	cin >> length >> breath;
	cout << "The area of rectangle is : " << length * 1LL * breath << "\n";
}	

