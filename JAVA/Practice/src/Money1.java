import java.util.Scanner;
public class Money1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		System.out.println("숫자를 입력하세요");

		int i = sc.nextInt();

		
		int a= i / 1000;

		int b = i % 1000 / 500;

		int c = i % 500 / 100;

		int d = i % 100;

		System.out.println("1000원짜리 : "+a+"개");
		System.out.println("500원짜리 : "+b+"개");
		System.out.println("100원짜리 : "+c+"개");
		System.out.println("나머지 : "+d);
		
	}

}
