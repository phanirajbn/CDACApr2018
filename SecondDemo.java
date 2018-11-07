import java.io.Console;//Represents the Console Input...
public class SecondDemo{
	public static void main(String[] args){
		//firstDemo();
		//secondDemoCode();
		castingDemo();
	}

	static void castingDemo(){
		float fValue = 1234.342f;//f represents float..

		int iValue = (int)fValue;
		System.out.println("FloatValue: " + fValue +"\tInt value : " + iValue);
	}
	//A Function is a group of statements that are created to be invoked multiple no of times within a program execution. 
	static String getString(String question){
		System.out.println(question);
		return System.console().readLine();
		//readLine always returns string....
	}

	static int getInteger(String question){
		String value = getString(question);
		return Integer.parseInt(value);
	}

	private static void secondDemoCode(){
		//Console c = System.console();
		String name = getString("Enter UR Name please");
		String address = getString("Enter the Address");
		int age = getInteger("Enter the Age");
		System.out.println("UR Retirement happens after " + (45 - age) + " years");
		//System.out.println("The name entered is " + name +"\nThe Address is " + address +"\nThe Age is " + age);	
	}
	private static void firstDemo(){
		System.out.println("Test 123");
		System.out.print("Test 123");
		System.out.println("Test to see if its in the same line");
		System.out.println("Test 123");
	}
}