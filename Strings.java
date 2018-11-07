public class Strings{
	public static void main(String[] args){
		//immutingExample();
		//otherMethods();
		StringBuilder sb = new StringBuilder("Hello ");
		sb.append("World");//original string is modified. 
		System.out.println(sb);//It is more optimized
		//insert, replace are some of the common methods that U can use for string operations. 
		sb.replace(4, 6, " ");//replaces the given string from a beginIndex and endIndex with the value...

		sb.insert(4, " with ");//appends the value from the specified index.....
		System.out.println(sb);
		//Stringbuilder will not create any new string, it simply manipulates the same object, so U dont need to store into different variable like the example of concat...
		sb.reverse();
		System.out.println(sb);
	}

	static void otherMethods(){
		String s1 = "Ramesh";
		String s2 = "Ramesh";
		System.out.println(s1 == s2); 
		System.out.println(s1.equals(s2)); 
		System.out.println(s1.compareTo(s2)); //0 means equal
		String csv = "1,Phaniraj,Bangalore";
		String [] values = csv.split(",");//It can also take a RegEx to split based on the RegEx condition....
		
		for (String val : values) {
			System.out.println(val);
		}
	}
	static void immutingExample(){
		String s1 = "Apple";
		String s2 = "Apple";//no new memory is created. 
		s2 = s2.concat(" is good for health");//created a new string...
		if(s2.contains("Apple"))
			System.out.println("They are talking about apple");
		else
			System.out.println("They are talking about something else");
		System.out.println(s2);
		System.out.println(s2.substring(2,7) + " from p to i");

	}
}