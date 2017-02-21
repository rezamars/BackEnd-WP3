package com.programmingfree.springservice;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-02-07T18:10:20.527+0100")
@StaticMetamodel(Task.class)
public class Task_ {
	public public volatile SingularAttribute<Task, Integer> id;
	public public volatile SingularAttribute<Task, String> taskName;
	public public volatile SingularAttribute<Task, String> taskDescription;
	public public volatile SingularAttribute<Task, String> taskPriority;
	public public volatile SingularAttribute<Task, String> taskStatus;
	public public volatile SingularAttribute<Task, Date> taskStartTime;
	public public volatile SingularAttribute<Task, Date> taskEndTime;
	public public volatile SingularAttribute<Task, Integer> taskArchived;
}
