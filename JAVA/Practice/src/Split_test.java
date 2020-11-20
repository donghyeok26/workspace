
public class Split_test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String str_1 = "A-B-CDEFG-HIJKL";
		
		String getStr1[] = str_1.split("-");
		for(int i = 0; i<getStr1.length;i++) {
			System.out.println("getStr1[" + i +"] : "+ getStr1[i]);
		}
	}

}
