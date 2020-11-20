import java.util.Scanner;
public class Split_test2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
			System.out.println("입력하세요");
				String str = sc.next();
		
		String getstr[] = str.split("\\+");
			for(int a = 0; a < getstr.length;a++) {
				System.out.println(getstr[a]);
		
		
		StringBuilder sb = new StringBuilder();
		for(int b = 0; b < getstr.length; b++) {
			sb.append("+" + getstr[b] );
			//System.out.println(sb);
		}
			
		System.out.println(sb);
		
			}
		
	}

}
