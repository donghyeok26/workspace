
		public class IndexOf_cal {

		public int cal(String scn) {

		System.out.println(scn);

		int pos = scn.indexOf('+');

		System.out.println("pos 값 확인:" +pos);

		// System.out.println("1111"+scn.substring(0, 2) + scn.substring(3));​

		if (pos != -1) { // 문자가 있으니까 -1이 아니여야 함

		System.out.println("if 문 안에 정상적으로 들어왔는지 확인 ");

		return cal(scn.substring(0, pos)) + cal(scn.substring(pos + 1));
		}

		System.out.println("return loop");

		String r = scn.trim();

		System.out.println("<!--------!> " + r);

		return Integer.parseInt(r);

		
		}
		IndexOf.java ​
		import java.util.Scanner;
		public
		
		
		=lass IndexOf {

		public static void main(String[] args) {

		// TODO Auto-generated method stub

		System.out.println("계산식을 입력하세요.");

		Scanner sc = new Scanner(System.in);

		String scn = sc.next();

		System.out.println("입력값 :"+ scn);

		IndexOf_cal io = new IndexOf_cal();

		int output = io.cal(scn);

		System.out.println("합계 :"+ output);

		}

		}
	}


