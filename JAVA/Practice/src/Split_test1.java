import java.util.Scanner;
public class Split_test1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub


	Scanner sc = new Scanner(System.in);
	System.out.println("입력하세요");
		String str = sc.next();//Scanner 문자 연산
			//System.out.println("test1");
	
	String getstr[] = str.split("\\+");
		//System.out.println("test2");
			for(int i = 0; i<getstr.length; i++) {
		//System.out.println("test3");

		System.out.println(getstr[i]);
	}
			
			int l =Integer.parseInt(getstr[0]);
			int j = Integer.parseInt(getstr[0]); 
			int m = Integer.parseInt(getstr[1]);
			int n = j+m;
			//System.out.println(n);
	}
	

}
