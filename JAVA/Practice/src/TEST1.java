import java.util.Scanner;
public class TEST1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("입력해주세요");
		int i = sc.nextInt();
		System.out.println("입력값은 :"+i);
		
		if(i>=900) {
		if(i>= 1000) {
			System.out.println("아주많다.");
		}else {
			System.out.println("많다");
			
		}
	}
		else if(i>=800) {
			if(i>=850) {
				System.out.println("조금많다.");
				System.out.println("없다.");
			}
		}
	}
}