import java.util.Scanner;
public class Split_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("입력하세요");
		String str =sc.next();
		
		for(int a =0; a < str.length(); a++) {
			String k = str.substring(a,a+1);
			System.out.println(k);
		}
		
		
	}

}
