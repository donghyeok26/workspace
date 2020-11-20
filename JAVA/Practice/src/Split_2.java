import java.util.Scanner;
public class Split_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
		System.out.println("입력하세요");
		String str = sc.next();
		
		String getstr[] = str.split("-");
			for(int i =0; i < getstr.length; i++) {
				System.out.println(getstr[i]);
			}
	}

}
