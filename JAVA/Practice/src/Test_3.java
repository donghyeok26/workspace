import java.util.Scanner;
public class Test_3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);
			System.out.println("글자를 입력해 주세요.");
		String a = sc.next();
		int b = a.length();
			System.out.println("입력 :"+ a);
			System.out.println("길이 :"+ b);
		
		
		if(b <= 20) {
			System.out.println("if");
			for(int c = 0; c < b; c++){
				System.out.println("for");
				System.out.println("c:"+c);
				String j = a.substring(c,c+1);
				System.out.println(j);	
			}
			
				 		
		}else {
			System.out.println("안돼.");
	    }
			
		
	}
}


