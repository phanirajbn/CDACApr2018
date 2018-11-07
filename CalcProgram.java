public class CalcProgram{
	public static void main(String[] args){
		String menu ="----------MATH CALC-------------\nTo Add numbers-------------->Press 1\nTo Subtract numbers-------------->Press 2\nTo Multiply numbers-------------->Press 3\nTo Divide numbers-------------->Press 4\nPS:Any other number is considered as Exit";
		//Displayed atleast once
		boolean processing = true;
		do{
			String choice = InputClass.getString(menu);
			processing = processMenu(choice);
		}while(processing);
	}

	static boolean processMenu(String choice){
		switch(choice){
			case "1":
			addNumbers();
			 break;
			case "2":
			subNumbers();
			break;
			case "3":mulNumbers(); break;
			case "4":divNumbers(); break;
			default:
			return false;
		}
		return true;	
	}

	static void addNumbers(){
		double v1 = InputClass.getDouble("Enter First Value");
		double v2 = InputClass.getDouble("Enter Second Value");
		double result = MathCalc.AddNumbers(v1, v2);
		System.out.println("The added value is " + result);
	}
	static void subNumbers(){
		double v1 = InputClass.getDouble("Enter First Value");
		double v2 = InputClass.getDouble("Enter Second Value");
		double result = MathCalc.SubtractNumbers(v1, v2);
		System.out.println("The subtracted value is " + result);
	}
	static void mulNumbers(){
		double v1 = InputClass.getDouble("Enter First Value");
		double v2 = InputClass.getDouble("Enter Second Value");
		double result = MathCalc.MultiplyNumbers(v1, v2);
		System.out.println("The multiplied value is " + result);
	}
	static void divNumbers(){
		double v1 = InputClass.getDouble("Enter First Value");
		double v2 = InputClass.getDouble("Enter Second Value");
		double result = MathCalc.DivideNumbers(v1, v2);
		System.out.println("The divided value is " + result);
	}
}

class InputClass{
	public static String getString(String question){
		System.out.println(question);
		return System.console().readLine();
		//readLine always returns string....
	}

	public static int getInteger(String question){
		String value = getString(question);
		return Integer.parseInt(value);
	}
	public static double getDouble(String question){
		String value = getString(question);
		return Double.parseDouble(value);
	}
}

//Operational Class....
class MathCalc{
	public static double AddNumbers(double first, double second){
		return first + second;
	}
	public static double SubtractNumbers(double first, double second){
			return first - second;
	}
	public static double MultiplyNumbers(double first, double second){
			return first * second;
	}
	public static double DivideNumbers(double first, double second){
			return first / second;
	}
}