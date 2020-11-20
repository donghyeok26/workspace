
public class Coding_17 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String k ="ABCDE";
				int j = k.length();
					char l[] = new char[j];
					
					for(int i = 0; i<j; i++) {
						l[i] = k.charAt(i);
						System.out.println("l :"+l[i]);
						int sum = l[i];
						System.out.println(sum);
					}
					int A = 65;
					int B = 66;
					int C = 67;
					int D = 68;
					int E = 69;
					
					int sum1 = A+B+C+D+E;
					System.out.println("ABCDEÀÇ ÇÕ="+ sum1);
	}

}
