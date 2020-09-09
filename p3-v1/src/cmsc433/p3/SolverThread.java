package cmsc433.p3;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class SolverThread implements Runnable {
	
	private Maze maze;
	private Position start;
	private Direction firstEntryDir;
	private List<Direction> path;
	private static Random rand = new Random();
	private static List<Direction> finalPath = new ArrayList<Direction>();
	
	public SolverThread(Maze maze, List<Direction> path, Position start, Direction firstEntryDir ) {
		this.maze = maze;
		this.path = path;
		this.start = start;
		this.firstEntryDir = firstEntryDir;
	}
	
	public void run() {
		Position curPos = this.start;
		Direction dir = firstEntryDir;
		
		int index;
		
		while(true) {
			List<Direction> dirOptions = maze.getMoves(curPos);
			
			if(!curPos.equals(maze.getStart())) {
				dirOptions.remove(dir.reverse());		// removing the direction of entry from dirOptions
				path.add(dir);
			}
			
			if(dirOptions.isEmpty()) {
				return;
			}
			
			dir = dirOptions.get(0);				// direction current thread will go in
			dirOptions.remove(dir);						// removing the direction from dirOptions
			
			Thread[] threads = new Thread[dirOptions.size()];
			for(int i=0;i<dirOptions.size();i++) {
				Direction d = dirOptions.get(i);
				threads[i] = new Thread(new SolverThread(maze, deepCopy(path), curPos.move(d), d));
				threads[i].start();
			}
			
			curPos = curPos.move(dir);
			if(curPos.equals(maze.getEnd())) {
				path.add(dir);
				break;
			}
		}
		
		if(curPos.equals(maze.getEnd())) {
			synchronized(finalPath) {
					finalPath = path;
			}
		} 
	}
	
	public static boolean hasASolution(){
		synchronized(finalPath) {
			return finalPath.size()!=0;
		}
	}
	
	public static List<Direction> getFinalSolution(){
		synchronized(finalPath) {
			return finalPath;
		}
	}
	
	public static List<Direction> deepCopy(List<Direction> path){
		List<Direction> copy = new ArrayList<Direction>();
		for(Direction d: path) {
			copy.add(d);
		}
		return copy;
	}
	
}
