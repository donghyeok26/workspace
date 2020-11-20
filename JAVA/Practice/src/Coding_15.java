import java.util.Scanner;
import java.util.Random;
public class Coding_15 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("입력하세요");
		int a = sc.nextInt();//정수받기
		int sum = 0;
		int e = 0;
		int d = 0;
			for(int i = 0; i <= a; i++) {
				sum += i;//숫자합해주기
				System.out.println("입력받은 수의 합"+sum);
		Random rd = new Random();
		d = rd.nextInt(10)+1;//10보다 작은 랜덤 숫자
		//System.out.println(d);
		e = sum / d;//나누기
		//System.out.println("나눈값 :"+e);
			}
			System.out.println("랜덤"+d);
			System.out.println("나누기"+e);
			
			
	}

}
