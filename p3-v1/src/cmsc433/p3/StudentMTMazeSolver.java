package cmsc433.p3;

import java.util.ArrayList;
import java.util.List;

/**
 * This file needs to hold your solver to be tested. 
 * You can alter the class to extend any class that extends MazeSolver.
 * It must have a constructor that takes in a Maze.
 * It must have a solve() method that returns the datatype List<Direction>
 *   which will either be a reference to a list of steps to take or will
 *   be null if the maze cannot be solved.
 */
public class StudentMTMazeSolver extends SkippingMazeSolver
{
    public StudentMTMazeSolver(Maze maze)
    {
        super(maze);
    }

    public List<Direction> solve()
    {
        // TODO: Implement your code here
    	Thread initThread = new Thread(new SolverThread(maze, new ArrayList<Direction>(),  maze.getStart(), null));
    	initThread.start();
    	while(!SolverThread.hasASolution()) {}
    	return SolverThread.getFinalSolution();
    }
    
    
    
}
