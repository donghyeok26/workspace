import java.util.Scanner;
public class Smart_phone {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("�Է��ϼ���");
		String st = sc.next();
	
		camera cam = new camera();
		System.out.println("�Կ��߽��ϴ�");
		
		Tel tele = new Tel();
		System.out.println("��ȭ");
		
		Music mus = new Music();
		System.out.println("�뷡���");
	}
	

}
