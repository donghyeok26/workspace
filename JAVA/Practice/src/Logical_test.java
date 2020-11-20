
public class Logical_test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			int charCode = 'A';
			System.out.println(charCode);
			
			if((charCode>=65)&&(charCode<=90)) {
				System.out.println("대문자");
				}
			if((charCode>=97)&& (charCode<=122)) {
				System.out.println("소문자");
			}
			if((charCode<48)&& !(charCode>57)) {
				System.out.println("숫자");
			}
	}

}
