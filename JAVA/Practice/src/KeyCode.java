import java.io.IOException;
public class KeyCode {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub

		int keyCode = 0;
		keyCode = System.in.read();
		
		System.out.println("�Է��Ͻ� ���� Ű�ڵ��" + keyCode);
		
		if(keyCode % 2 == 0) {
			System.out.println("�ۼ�");
		}
		else {
			System.out.println("Ȧ��");
		}
		
		
	}

}
