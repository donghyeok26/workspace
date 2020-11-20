import java.util.Random; 

public class Logical_test_if {

	public static void main(String[] args) {
		Random rd = new Random();
		//double num = (Math.random()*6);
		int dice = (int)(Math.random()*6);
		//double dice = (Math.random()*6)+1;
		
		
		System.out.println(dice);
		
		if(dice == 1) {
			 System.out.println("주사위가 1 이 나왔습니다.");	
		}else if(dice == 2) {
			System.out.println("주사위가 2 이 나왔습니다.");
		}else if(dice == 3) {
			System.out.println("주사위가 3 이 나왔습니다.");
		}else if(dice == 4) {
			System.out.println("주사위가 4 이 나왔습니다.");
		}else if(dice == 5) {
			System.out.println("주사위가 5 이 나왔습니다.");
		}else if(dice == 6) {
			System.out.println("주사위가 6 이 나왔습니다.");
		}
			
		// TODO Auto-generated method stub

	}

}
