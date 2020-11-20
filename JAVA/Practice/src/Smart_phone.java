import java.util.Scanner;
public class Smart_phone {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		System.out.println("입력하세요");
		String st = sc.next();
	
		camera cam = new camera();
		System.out.println("촬영했습니다");
		
		Tel tele = new Tel();
		System.out.println("전화");
		
		Music mus = new Music();
		System.out.println("노래재생");
	}
	

}
