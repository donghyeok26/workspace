import java.util.Scanner;
import java.util.Random;
public class Scanner_test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("�Է��ϼ���.");
		int score = sc.nextInt();
		
		int num = (int)(Math.random()*10)+1;
		
		double a = (double)score  /(double)num ;//i�� �������� ��
		
		System.out.println(num);
		System.out.println(score);
		System.out.println(a);
	
		
		if(a >= 100) {
			System.out.println("�ſ� Ů�ϴ�.");		
		}else if (a >= 90){
			System.out.println("Ů�ϴ�.");
		}else if (a >= 00) {
			System.out.println("�����Դϴ�.");
		}
	}

}
