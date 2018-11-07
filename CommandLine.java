import java.io.*;//get reference of all the classes that are available in the package...

public class CommandLine{
	public static void main(String[] args) throws Exception{
		//displayMenu(args[0]);
		byte[] encoded = Files.readAllBytes(Paths.get(args[0]));

		String data = new String(encoded, null);
		System.out.println(data);
	}

	static void displayMenu(String filename){
		try{
		FileReader reader = new FileReader(filename);
		int i =0;
		while((i = reader.read()) != -1){
			System.out.print((char)i);
		}
		reader.close();
		}
		catch(Exception ex){

		}
	}
}