import java.util.Scanner;
public class Array_test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Scanner를 써서 문자열을 받아 한글자씩 substring한 후 Str_arry[]라는 배열변수에 넣고 system.out.println으로 출력
		Scanner sc = new Scanner(System.in);
		String a = sc.next();//문자열 받기
		
		int b = a.length();//글자수
		
		String Str_arry[] = new String[a.length()];//Str_array[]라는 배열변수
		String k = "";//전역변수
		for(int i = 0; i < b; i++) {	
			Str_arry[i] = a.substring(i,i+1);
			k += Str_arry[i];
	
			
			System.out.println(k);
			//System.out.println(Str_arry[0] + Str_arry[1] + Str_arry[2] + Str_arry[3] + Str_arry[4]);
		
		}
		//System.out.println(Str_arry);
		
		
		//System.out.println(k);
	}

}
