import java.util.Scanner;
public class Money {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		
		int a = num;
		int b = 0;
		int c = 0;
		int d = 0;
		
		
		for(int i =0; i<=num;i++) {
			b = a/1000;
			c = a/500;
			d = a/100;
		}
		System.out.println("õ��¥��"+b);
		System.out.println("�����¥��"+c);
		System.out.println("���¥��"+d);
		
	}
}