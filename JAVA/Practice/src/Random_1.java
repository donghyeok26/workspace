import java.util.Random;
public class Random_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Random rd = new Random();
		int a = rd.nextInt(100)+1;//random으로 100까지 숫자받음
		System.out.println("Random 값: "+a);
		
		if( a % 2 == 0) {// a/2 가 0이 나오면 짝수
			System.out.println("짝수");
		}
		else if(a % 2 !=0)
		{// a/2가 0이 아니면 홀수
			System.out.println("홀수");
		}
		
		
	}

}
