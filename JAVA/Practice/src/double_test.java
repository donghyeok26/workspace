
public class double_test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int i = 100;
		int j = 3;
		double k = (double)i;
		double l = (double)j;
		float m = (float)i;
		float n = (float)j;
		
		int result_1 = i / j;
		int result_2 = i % j;
		double result_3 = k / j;
		float result_4 = i % j;
		
		
		
		System.out.println("결과1 :"+ result_1);
		System.out.println("결과2 :"+ result_2);
		System.out.println("결과3 :"+ result_3);
		System.out.println("결과4 :"+ result_4);
	}

}
