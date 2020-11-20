import java.util.Scanner;
public class Logical_test_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("입력하세요");
		int  score = sc.nextInt();
		
		if(score >=90) {
			System.out.println("점수가 90점 보다 높습니다.");
			System.out.println("A클래스 입니다.");
			}else {
			System.out.println("점수가 90점 보다 낮습니다.");
			System.out.println("B클래스 입니다.");
		}
	
	}

}
