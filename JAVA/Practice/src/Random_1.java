import java.util.Random;
public class Random_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Random rd = new Random();
		int a = rd.nextInt(100)+1;//random���� 100���� ���ڹ���
		System.out.println("Random ��: "+a);
		
		if( a % 2 == 0) {// a/2 �� 0�� ������ ¦��
			System.out.println("¦��");
		}
		else if(a % 2 !=0)
		{// a/2�� 0�� �ƴϸ� Ȧ��
			System.out.println("Ȧ��");
		}
		
		
	}

}
