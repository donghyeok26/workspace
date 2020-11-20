import java.io.IOException;
public class KeyCode {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub

		int keyCode = 0;
		keyCode = System.in.read();
		
		System.out.println("입력하신 값의 키코드는" + keyCode);
		
		if(keyCode % 2 == 0) {
			System.out.println("작수");
		}
		else {
			System.out.println("홀수");
		}
		
		
	}

}
