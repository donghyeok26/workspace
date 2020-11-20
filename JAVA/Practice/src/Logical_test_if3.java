
public class Logical_test_if3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int score = (int)(Math.random()*20)+81;
		System.out.println(score);
		
		String grade;
		
		if(score >= 90) {
			if(score >=95) {
				grade = "A+";
				
			}else {
				grade = "A";
				
			}
		}else {
			if(score >=85) {
				grade = "B+";
			}else {
				grade = "B";
				
			}else {
		
	
	
	System.out.println("당신의 학점은 :"+grade);
			}
}
