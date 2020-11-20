import java.util.Scanner;
public class Test5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		
		
	int sum = 0;
	for(int i = 0; i <=a; i++) {
		if(i % 2 !=0) {
			sum += i;
			System.out.println(i);
		}
		else {
			
		}
		
		}System.out.println(sum);
	}
}
