import java.util.ArrayList;
public class ObjectsDemo{
	public static void main(String[] args){
		Object data = 123;
		System.out.println(data.getClass());
		//Its the base class for all types in Java....
		data = "SomeOther Class";
		System.out.println(data.getClass());

		ArrayList list = new ArrayList();
		list.add(123);
		list.add("Hello 123");
		list.add(123.345f);
		for (Object obj : list ) {
			System.out.println(obj.getClass());
		}
		System.out.println(list.toString());
		

	}
}