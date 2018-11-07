public class arraysDemo{
	public static void main(String[] args){
		//firstDemo();
		//secondDemo();
		//newSyntaxOfArray();
		jaggedArrays();
	}
	/** 
	Jagged arrays are array of arrays which has fixed rows and different columns in each row
	*/
	static void jaggedArrays(){
		int [][] classrooms = new int [4][];
		
		classrooms[0] = new int[]{2,3,4,5};
		classrooms[1] = new int[]{4,5,3};
		classrooms[2] = new int[]{3,4,5,4,5,3,3,2,3,4};
		classrooms[3] = new int[]{3,3,2,3,4};
		for (int i =0; i < classrooms.length; i++) {
			for (int value : classrooms[i]) {
				System.out.print(value + " ");
			}
			System.out.println();
		}
	}
	static void newSyntaxOfArray(){
		/*int [] elements = {2,3,4,4,5,5};//Normal array...
		int [][] items = {2,3,4},{3,4,5};//2D array*/
	}
	/**
	This is the example of multi dimensional Array....
	*/
	static void secondDemo(){
		int[][] school = new int[2][2];
		school[0][0] = 1;
		school[0][1] = 2;
		school[1][0] = 3;
		school[1][1] = 4;
		//Using nested loop to iterate thro the elements of a multi dimensional Array...
		for (int i =0; i <2 ; i++ ) {
			for (int j =0; j <2 ; j++) {
				System.out.print(school[i][j] + "  ");
			}
			System.out.println();
		}
		//displaying arrays in matrix format...
	}

	/** 
		This is an example of simple Array in Java
	*/
	static void firstDemo(){
		int months[] = new int[12];
		months[0] = 31;
		months[1] = 28;
		months[2] = 31;
		months[3] = 30;
		months[4] = 31;
		months[5] = 30;
		months[6] = 31;
		months[7] = 31;
		months[8] = 30;
		months[9] = 31;
		months[10] = 30;
		months[11] = 31;
		System.out.println("April has " + months[3] + " days");

		for (int item : months) {
			System.out.println("Month: " + item);
		}//foreach in Java..
		
		System.out.println();
		for (int i = 0; i < 13 ; i++) {
			System.out.println("Month:" + months[i]);
		}
	}
}