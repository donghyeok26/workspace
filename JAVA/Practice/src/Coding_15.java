import java.util.Scanner;
import java.util.Random;
public class Coding_15 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("�Է��ϼ���");
		int a = sc.nextInt();//�����ޱ�
		int sum = 0;
		int e = 0;
		int d = 0;
			for(int i = 0; i <= a; i++) {
				sum += i;//���������ֱ�
				System.out.println("�Է¹��� ���� ��"+sum);
		Random rd = new Random();
		d = rd.nextInt(10)+1;//10���� ���� ���� ����
		//System.out.println(d);
		e = sum / d;//������
		//System.out.println("������ :"+e);
			}
			System.out.println("����"+d);
			System.out.println("������"+e);
			
			
	}

}
