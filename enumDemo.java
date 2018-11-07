/*class MachineState{
	public static int BUSY = 1;
	public static int IDLE = 0;
	public static int BLOCKED = -1;
}
*/
enum MachineState{
	IDLE, BUSY, BLOCKED
}
class Machine{
	MachineState state;
	public void setState(MachineState state){
		this.state = state;//Internally UR data is represented by names
	}

	public MachineState getState(){
		return this.state;
	}
}

public class enumDemo{
	public static void main(String[] args){
		Machine myPC = new Machine();
		myPC.setState(MachineState.IDLE);
		System.out.println("My PC's current status is  " + myPC.getState());
		MachineState state = myPC.getState();
		switch(state){
			case BUSY:
				System.out.println(state + ": Try later...");
				break;
			case IDLE:
			System.out.println(state + ": At UR Service...");
				break;
			case BLOCKED:
				System.out.println(state + ": Waiting for operation to complete....");
				break;	
		}

	}
}

