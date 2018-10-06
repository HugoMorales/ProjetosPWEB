package ManagedBeans;

import java.util.ArrayList;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import Entidades.Aluno;

@ManagedBean
@SessionScoped
public class AlunoMB {
	private List<Aluno> ListaAlunos = new ArrayList<Aluno>();
	private Aluno aluno = new Aluno();
	
	public Aluno getAluno() {
		return aluno;
	}
	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}
	
	public void save() {
		ListaAlunos.add(aluno);
		aluno = new Aluno();
	}
	
	public List<Aluno> getAlunos(){
		return ListaAlunos;
	}
}
