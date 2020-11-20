import java.util.Scanner;
public class For_test3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		System.out.println("첫번째 수"+a);
		int b = sc.nextInt();
		System.out.println("두번쨰 수"+b);
			
			boolean i = (a < b);
	System.out.println(i);
			
			if(i == true) {
				 { 
				if(a % 2 == 0) {
					for(int c = a; a<=b; a++);
					System.out.println("짝수");
				}
				}
				
					}else {
					System.out.println("홀수");
					}
				
			
		
		
	}

}
