import java.util.Scanner;
public class Coding_18 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		boolean stop = false;
		
		
		Coding_18_plus plus = new Coding_18_plus();
		Coding_18_minus minu = new Coding_18_minus();
		Coding_18_multi mul = new Coding_18_multi();
		Coding_18_div div = new Coding_18_div();
		while (!stop) {
			
			System.out.println("두개의 정수 입력");
			Scanner sc = new Scanner(System.in);
			System.out.println("첫번쨰 정수 입력");
			int num1 = sc.nextInt();
			System.out.println("두번째 정수 입력");
			int num2 = sc.nextInt();
			System.out.println("+,-,/,x 중 선택");
			String k = sc.next();
			
			
			if(k.equals("+")) {
				int sum = plus.plus_sum(num1,num2);
				System.out.println(sum);
			}
			if(k.equals("-")) {
				int sum1 = minu.minus_sum(num1, num2);
				System.out.println(sum1);
			}
			if(k.equals("x")) {
				int sum2 = mul.multi_sum(num1, num2);
				System.out.println(sum2);
			}
			if(k.equals("/")) {
				int sum3 = div.div_sum(num1, num2);
				System.out.println(sum3);
			}
			System.out.println("계속 Y or 종료 N");
			String str = sc.next();
			if(str.equals("Y")||str.equals("y")) {
				System.out.println("------------------");
				continue;
			}
				
			if(str.equals("N")||str.equals("n")) {
				break;
			}
			}System.out.println("작업종료");
		}
		
	}


