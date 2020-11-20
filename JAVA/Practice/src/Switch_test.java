import java.util.Scanner;
public class Switch_test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		
		System.out.println("알파벳을 입력하세요");
		
		String grade = sc.next();
		
		switch(grade) {
		case"A":
		case"a":
		System.out.println("물건 많이 팔아주셔서 감사합니다.");
		break;
		
		
		case"B":
		case"b":
			System.out.println("조금만 더 사주세요");
		break;
		default:
			System.out.println("누구세요?");
			
			
		}
		
		
		
		
		
	}

}
