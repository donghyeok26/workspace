import java.util.Scanner;
public class Array_test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//Scanner�� �Ἥ ���ڿ��� �޾� �ѱ��ھ� substring�� �� Str_arry[]��� �迭������ �ְ� system.out.println���� ���
		Scanner sc = new Scanner(System.in);
		String a = sc.next();//���ڿ� �ޱ�
		
		int b = a.length();//���ڼ�
		
		String Str_arry[] = new String[a.length()];//Str_array[]��� �迭����
		String k = "";//��������
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
