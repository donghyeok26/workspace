
public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int i = 999;
		int j = 40;
		String k = "65";
		int l = Integer.parseInt(k);
		
		double m = (double)i*(double)j;
		
		double n = m /(double) l;
		double o = l / m * 100;
		
		
		
		System.out.println("i*j=" +m);
		System.out.println("i*j=/l :"+ n);
		System.out.println(o+"%");
	}

}
