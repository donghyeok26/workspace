import java.util.Scanner;
public class While_test2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		boolean stop = false;

		int num;

		while (!stop) { 
			
			int num1 =0;//최대 5개의 값을 받고, 초기화 시키지 않으면 아래에서 애러가 발생하므로 0으로 초기화
			int num2 =0;
			int num3 =0;
			int num4 =0;
			int num5 =0;

			int cnt;//몇개의 항으로 계산을 할지 카운팅 하기 위한 변수
			System.out.println("어떤 연산을 하시겠어요? + - x / %");
			Scanner sc = new Scanner(System.in);
			String k = sc.next();
			if(k.equals("%")) {//%를 선택한다면 최대 2개의 값을 선택해 연산 진행
				System.out.println("두개의 값을 입력하실 수 있습니다.");
				System.out.println("첫번째 수를 입력하세요.");
				num1 = sc.nextInt();
				System.out.println("두번쨰 수를 입력하세요.");
				num2 = sc.nextInt();
				
				num = num2 / num1 * 100;
				System.out.println(num);
			}
			
			
			
			
			
			
		if(k.equals("+")) {//+-*/를 선택하면 원하는 값을 넣고 진행
			System.out.println("몇개의 숫자로 계산을 하시겠어요?");
			cnt = sc.nextInt();
			if(cnt ==1 || cnt>5) { //다만 1이나 5를 넣을 경우
				System.out.println("너무 적거나 많이 넣었습니다.");
					continue;//처음부터 다시 시작
			}else {
				for(int i =1; i<=cnt; i++) {
					System.out.println(i+"번쨰 수를 입력하세요");
					if( i == 1) {num1 = sc.nextInt();}
					if( i == 2) {num2 = sc.nextInt();}
					if( i == 3) {num3 = sc.nextInt();}
					if( i == 4) {num4 = sc.nextInt();}
					if( i == 5) {num5 = sc.nextInt();}
					
				}
				if(cnt == 2) {
					num = num1 + num2; 

					System.out.println(num1 + " + " + num2 + " = " + num);
				}
				if(cnt == 3) {
					num = num1 + num2 + num3;

					System.out.println(num1 + " + " + num2 + " + "+ num3 +" = " + num);
				}
				if(cnt == 4 ) {
					num = num1 + num2 + num3 + num4;
					
					System.out.println(num1 + " + " + num2 + " + "+ num3 +" + "+ num4 + " = " + num);
				}
				if(cnt == 5) {
					num = num1 + num2 + num3 + num4 + num5;
					
					System.out.println(num1 + " + " + num2 + " + "+ num3 +" + "+ num4 +" + " + num5 + " = " + num);
				}
							}
		}
		if(k.equals("X")) {
			System.out.println("몇개의 숫자로 계산을 하시겠어요?");
			cnt = sc.nextInt();
		}
	
		//System.out.println("sc"+k);

		if(k.equals("X")) {

		num = num1 * num2; 

		System.out.println(num1 + " X " + num2 + " = " + num);

		}

		if(k.equals("+")) { 

		num = num1 + num2; 

		System.out.println(num1 + " + " + num2 + " = " + num);

		}

		if(k.equals("-")) { 

		num = num1 + num2; 

		System.out.println(num1 + " - " + num2 + " = " + num);

		}

		if(k.equals("/")) { 

		num = num1 + num2; 

		System.out.println(num1 + " / " + num2 + " = " + num);

		}

		System.out.println("계속 Y, 종료 N 입력");

		String yn = sc.next(); 

		if (yn.equals("Y") || yn.equals("y")) { 

		System.out.println("---------------------");

		continue; 

		}

		if (yn.equals("N") || yn.equals("n")) { 

		break; 

		}

		}

		System.out.println("시스템이 종료되었습니다.");

		}

		}