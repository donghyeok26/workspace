import java.util.Scanner;
public class Money1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		System.out.println("���ڸ� �Է��ϼ���");

		int i = sc.nextInt();

		
		int a= i / 1000;

		int b = i % 1000 / 500;

		int c = i % 500 / 100;

		int d = i % 100;

		System.out.println("1000��¥�� : "+a+"��");
		System.out.println("500��¥�� : "+b+"��");
		System.out.println("100��¥�� : "+c+"��");
		System.out.println("������ : "+d);
		
	}

}
