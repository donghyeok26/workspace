import java.util.Scanner;
public class While {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		boolean stop = false;

		int num;

		while (!stop) { 

		Plus plus = new Plus();
		Minus minus = new Minus();
		Multply multi = new Multply();
		divsion div = new divsion();
			
			
			
		System.out.println("�ΰ��� ������ �Է��ϼž��մϴ�.");

		Scanner sc = new Scanner(System.in);

		System.out.println("ù��° ���� �Է��ϼ���.");

		int num1 = sc.nextInt(); 

		System.out.println("�ι�° ���� �Է��ϼ���.");

		int num2 = sc.nextInt();

		System.out.println("� ������ �Ͻðھ��? + - x /");

		String k = sc.next();

		//System.out.println("sc"+k);

		if(k.equals("X")) {
			int sum2 = multi.Multi_cal(num1, num2);
			System.out.println(sum2);
		 

		}

		if(k.equals("+")) {
			int sum = plus.Plus_cal(num1, num2);
			System.out.println(sum);
			
		}

		if(k.equals("-")) { 

		int sum1 = minus.Mius_cal(num1, num2);
		System.out.println(sum1);

		}

		if(k.equals("/")) { 
			int sum3 = div.divsion_cal(num1, num2);
			System.out.println(sum3);


		}


		System.out.println("��� Y, ���� N �Է�");

		String yn = sc.next(); 

		if (yn.equals("Y") || yn.equals("y")) { 

		System.out.println("---------------------");

		continue; 

		}

		if (yn.equals("N") || yn.equals("n")) { 

		break; 

		}

		}

		System.out.println("�ý����� ����Ǿ����ϴ�.");

		}

		
	}


