import java.util.Scanner;
public class Indexof_Substring {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
		System.out.println("입력하세요");
		String str = sc.next();
		
		int ind = str.indexOf("-");
			for(ind=0; ind <str.length(); ind++) {
				String str1 = str.substring(ind,ind+1);
					System.out.println(str1);
			}
		
		
	}

}
